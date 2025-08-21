import { useState } from "react";
import styled from "styled-components";
import smileAddImage from "../assets/ic-face-smile-add.svg";
import Avatar from "../components/avatar/avatar";
import AVATAR_SIZE from "../components/avatar/avatar-size";
import Badge from "../components/badge/badge";
import BADGE_TYPE from "../components/badge/badge-type";
import EmojiBadge from "../components/badge/emoji-badge";
import ArrowButton from "../components/button/arrow-button";
import ARROW_BUTTON_DIRECTION from "../components/button/arrow-button-direction";
import {
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import ToggleButton from "../components/button/toggle-button";
import Header from "../components/header/header";
import Modal from "../components/modal/modal";
import Popover from "../components/popover/popover";
import POPOVER_ALIGNMENT from "../components/popover/popover-alignment";
import TextField from "../components/text-field/text-field";
import TEXT_FIELD_TYPE from "../components/text-field/text-field-type";
import Toast from "../components/toast/toast";
import { useToast } from "../hooks/use-toast";

const OutlinedHeader = styled(Header)`
  border: 1px solid black;
`;

function TestPage() {
  /* Dropdown type TextField */
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [dropdown2Error, setDropdown2Error] = useState("Error Message");

  const handleDropdownSelect1 = (option) => {
    setOption1(option);
  };
  const handleDropdownSelect2 = (option) => {
    setOption2(option);
    setDropdown2Error(null);
  };

  /* Toast */
  const { showsToast, setShowsToast } = useToast();

  const handleToastClick = () => setShowsToast(true);
  const handleToastDismiss = () => setShowsToast(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <h1>🤯</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <PrimaryButton size={BUTTON_SIZE.large} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.medium} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.small} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <PrimaryButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <SecondaryButton size={BUTTON_SIZE.large} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.medium} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.small} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <SecondaryButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <OutlinedButton size={BUTTON_SIZE.large} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.medium} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.small} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} title="Hello" />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} title="Hello" disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <OutlinedButton
          size={BUTTON_SIZE.medium}
          title="Hello"
          icon={smileAddImage}
        />
        <OutlinedButton
          size={BUTTON_SIZE.small}
          title="Hello"
          icon={smileAddImage}
        />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          title="Hello"
          icon={smileAddImage}
        />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          title="Hello"
          disabled
          icon={smileAddImage}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <OutlinedButton size={BUTTON_SIZE.medium} icon={smileAddImage} />
        <OutlinedButton size={BUTTON_SIZE.small} icon={smileAddImage} />
        <OutlinedButton size={BUTTON_SIZE.extraSmall} icon={smileAddImage} />
        <OutlinedButton
          size={BUTTON_SIZE.extraSmall}
          disabled
          icon={smileAddImage}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.left} />
        <ArrowButton direction={ARROW_BUTTON_DIRECTION.right} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <ToggleButton options={["컬러", "이미지", "다른값"]} />
        <ToggleButton value="이미지" options={["컬러", "이미지", "다른값"]} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Badge type={BADGE_TYPE.acquaintance} />
        <Badge type={BADGE_TYPE.coworker} />
        <Badge type={BADGE_TYPE.family} />
        <Badge type={BADGE_TYPE.friend} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <EmojiBadge emoji="😚" count={1} />
        <EmojiBadge emoji="😁" count={10} />
        <EmojiBadge emoji="😉" count={100} />
        <EmojiBadge emoji="😊" count={1000} />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <TextField type={TEXT_FIELD_TYPE.input} placeholder="Placeholder" />
        <TextField
          type={TEXT_FIELD_TYPE.input}
          value="Input value"
          placeholder="Placeholder"
          disabled
        />
        <TextField
          type={TEXT_FIELD_TYPE.input}
          placeholder="Placeholder"
          error="Error Message"
        />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <TextField
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="dropdown1"
          placeholder="Placeholder"
          value={option1}
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          onSelect={handleDropdownSelect1}
        />
        <TextField
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="dropdown2"
          value="Input value"
          placeholder="Placeholder"
          options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          disabled
        />
        <TextField
          type={TEXT_FIELD_TYPE.dropdown}
          dropdownId="dropdown3"
          placeholder="Placeholder"
          value={option2}
          error={dropdown2Error}
          options={[
            { title: "Option 1", fontFamily: "system-ui" },
            { title: "Option 2", fontFamily: "Roboto" },
            { title: "Option 3", fontFamily: "Helvetica Neue" },
            { title: "Option 4", fontFamily: "Segoe UI" },
          ]}
          onSelect={handleDropdownSelect2}
        />
      </div>
      <div>
        <PrimaryButton
          size={BUTTON_SIZE.small}
          title="Show Toast"
          onClick={handleToastClick}
        />
        {showsToast && (
          <Toast
            message="URL이 복사 되었습니다."
            onDismiss={handleToastDismiss}
          />
        )}
      </div>
      <div>
        <Modal
          id="user"
          action={<PrimaryButton size={BUTTON_SIZE.small} title="Show Modal" />}
        >
          <h1>This is Modal.</h1>
        </Modal>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <Popover
          id="left-popover"
          alignment={POPOVER_ALIGNMENT.left}
          action={
            <PrimaryButton
              size={BUTTON_SIZE.small}
              title="Show Popover on Left"
            />
          }
        >
          <h1>This is Popover.</h1>
        </Popover>
        <Popover
          id="right-popover"
          alignment={POPOVER_ALIGNMENT.right}
          action={
            <PrimaryButton
              size={BUTTON_SIZE.small}
              title="Show Popover on Right"
            />
          }
        >
          <h1>This is Popover.</h1>
        </Popover>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Avatar size={AVATAR_SIZE.large} />
          <Avatar size={AVATAR_SIZE.medium} />
          <Avatar size={AVATAR_SIZE.small} />
          <Avatar size={AVATAR_SIZE.extraSmall} />
          <Avatar source="https://picsum.photos/80" size={AVATAR_SIZE.large} />
          <Avatar source="https://picsum.photos/80" size={AVATAR_SIZE.medium} />
          <Avatar source="https://picsum.photos/80" size={AVATAR_SIZE.small} />
          <Avatar
            source="https://picsum.photos/80"
            size={AVATAR_SIZE.extraSmall}
          />
        </div>
      </div>
    </div>
  );
}

export default TestPage;
