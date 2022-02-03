import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const draggingStyle = {
    opacity: 0.25,
};

const Drag = props => {
    const [isDragging, setIsDragging] = React.useState(false);
    const image = React.useRef(null);
    // console.log("----------props----------")
    //     console.log(props);
    //     console.log("----------props----------")
    React.useEffect(() => {
        image.current = null;        
        if (props.children.props) {
            image.current = new Image();
            image.current.src = props.children.props;
        }
    }, [props.dragImage]);

    const startDrag = ev => {
        setIsDragging(true);
        ev.dataTransfer.setData("drag-item", props.children.props.src);
        ev.dataTransfer.effectAllowed = props.dropEffect;
        if (image.current) {
            ev.dataTransfer.setDragImage(image.current, 0, 0);
        }
    };

    const dragEnd = () => setIsDragging(false);

    return (
        <div style={isDragging ? draggingStyle : {},{display:"inline-block"}} draggable onDragStart={startDrag} onDragEnd={dragEnd}>
            {/* {console.log(props.children)} */}
            {props.children}
        </div>
    );
};

Drag.propTypes = {
    dataItem: PropTypes.string.isRequired,
    dragImage: PropTypes.string,
    dropEffect: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Drag.defaultProps = {
    dragImage: null,
    dropEffect: dropEffects.All,
};

export default Drag;
