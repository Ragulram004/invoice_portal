import { useEffect,useState } from "react";

function MinMediaQuery(query,defaultMatches = window.matchMedia(query)){
  const [minmatches,setMatches] = useState(defaultMatches);

  useEffect(() =>{
    const media = window.matchMedia(query);
    if(media.matches !== minmatches) setMatches(media.matches);
    const listener = () =>setMatches(media.matches);
    media.addListener(listener);
    return() => media.removeListener(listener);
  },[query,minmatches]);
  
  return minmatches;
}

export default MinMediaQuery;