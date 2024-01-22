import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import useResizeObserver from "../hooks/useResizeObserver";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const [more, setMore] = useState(true);
  const [isObserve, setIsObserve] = useState(true);

  const handleChange = () => {
    setMore((prev) => !prev);
  };

  const preRef = useRef();
  const [height] = useResizeObserver(preRef, isObserve);

  return (
    <section className="flex flex-col lg:flex-row gap-x-4">
      <article className="basis-4/6">
        <iframe
          className="aspect-video rounded-lg"
          id="player"
          type="text/html"
          width="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div ref={preRef} className="bg-zinc-800  rounded-xl p-5">
            <pre
              className={`${more ? "line-clamp-3 " : ""} whitespace-pre-wrap`}
            >
              {description}
            </pre>
            {height > 71 && (
              <button className="pl-1 pt-1 font-black" onClick={handleChange}>
                {more ? "더보기" : "간략히"}
              </button>
            )}
          </div>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
