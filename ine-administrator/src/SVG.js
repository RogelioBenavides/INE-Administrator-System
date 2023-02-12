const SVG = (props) => {
    const svgStyles = {"margin":"10px","height":"100px","width":"100px"};
    return(
        <svg style={svgStyles} viewBox={props.viewBox} fill={props.fill} xmlns={props.xmlns}>{props.children}</svg>
    );
}

export default SVG;