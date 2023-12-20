import Video from "./Video";

function VideoList(props) {
  return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}

export default VideoList
