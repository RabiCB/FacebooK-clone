import React from "react";

const Widgets = () => {
  return (
    <div className="Widgets">
      <iframe title="hug"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frollirabin%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{border:'none' ,overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widgets;
