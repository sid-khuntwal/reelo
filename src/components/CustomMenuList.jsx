import { FixedSizeList as List } from "react-window";

const CustomMenuList = (props) => {
  const itemHeight = 45;
  const { children, maxHeight } = props;

  return (
          <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={itemHeight}
          >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
          </List>
  );
};

export default CustomMenuList;
