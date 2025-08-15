import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import downArrow from "../assets/icons/down-arrow.svg";

export default function CategoryDropdown({
  value,
  options = [],
  placeholder = "카테고리를 선택하세요",
  onChange,
  onAdd,
  width = "50%",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (opt) => {
    setOpen(false);
    if (opt === "__ADD__") {
      onAdd?.();
    } else {
      onChange?.(opt);
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <Wrap ref={ref} style={{ width }}>
      <Trigger onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span
          className="body2"
          style={{
            color: value ? "#000000" : "#909090",
            paddingLeft: 10,
          }}
        >
          {value ?? placeholder}
        </span>
        <img src={downArrow} alt="downarrow" />
      </Trigger>

      {open && (
        <Menu role="listbox">
          {[...options, "__ADD__"].map((opt, i) => {
            const isAdd = opt === "__ADD__";
            return (
              <Item
                key={i}
                onClick={() => handleSelect(opt)}
                $isAdd={isAdd}
                role="option"
                style={{ borderTop: i !== 0 ? "1px solid #90909033" : "none" }}
              >
                {isAdd ? "추가" : opt}
              </Item>
            );
          })}
        </Menu>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  z-index: 0;
`;

const Trigger = styled.button`
  all: unset;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  border: 1px solid #909090;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;
  top: 15px;
  left: 0;
  width: 99%;
  background: #fff;
  border: 1px solid #909090;
  border-top: none;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1;
  padding-top: 20px;
  max-height: calc(55px * 4);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -1px;
    right: -1px;
    height: 20px;
    background: #fff; /* 경계선 덮기 */
    border-left: 1px solid #909090;
    border-right: 1px solid #909090;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

const Item = styled.li`
  list-style: none;
  height: 55px;
  display: flex;
  align-items: center;
  margin-left: -37px;
  padding: 0 15px;
  font-size: 16px;
  color: ${(p) => (p.$isAdd ? "#ff6b6b" : "#000000")};
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;
