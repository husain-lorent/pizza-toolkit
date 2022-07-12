import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoad = () => (
  <ContentLoader 
    speed={2}
    width={270}
    height={400}
    viewBox="0 0 270 400"
    backgroundColor="#ddd6d6"
    foregroundColor="#eaeaeb"
    className="mx-auto grid"
  >
    <circle cx="133" cy="101" r="96" /> 
    <circle cx="122" cy="108" r="23" /> 
    <circle cx="120" cy="109" r="21" /> 
    <circle cx="122" cy="105" r="14" /> 
    <circle cx="117" cy="97" r="20" /> 
    <circle cx="93" cy="80" r="28" /> 
    <rect x="8" y="214" rx="0" ry="0" width="270" height="33" /> 
    <rect x="6" y="263" rx="0" ry="0" width="270" height="81" /> 
    <rect x="125" y="357" rx="8" ry="8" width="145" height="29" /> 
    <rect x="177" y="373" rx="0" ry="0" width="1" height="8" /> 
    <rect x="156" y="369" rx="0" ry="0" width="2" height="5" /> 
    <rect x="7" y="358" rx="0" ry="0" width="75" height="29" /> 
    <rect x="45" y="379" rx="0" ry="0" width="7" height="6" />
  </ContentLoader>
)

export default SkeletonLoad
