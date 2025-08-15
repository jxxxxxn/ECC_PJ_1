import { PageHeader } from "../../components/PageHeader";
import PfEditGeneral from "./PfEditGeneral";
import PfEditSocial from "./PfEditSocial";

export default function ProfileEdit() {
    const id = '1'; // 기본 일반 로그인 id 고정
    const loginType = id === '2' ? "social" : "general";

    return (
        <div
        style={{
            padding: 10,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
        }}
        >
            <PageHeader title="프로필/회원정보 수정" />

            {loginType === "general" && <PfEditGeneral />}
            {loginType === "social" && <PfEditSocial />}
        </div>
    );
};
