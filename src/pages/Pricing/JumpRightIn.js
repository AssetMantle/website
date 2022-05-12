import { useTranslation } from "react-i18next";
import { ButtonPrimary } from "../../components/Buttons";
import DATA from "../../data/pricingData.json";

export default function JumpRightIn() {
  const { t } = useTranslation();

  return (
    <section className="section_jumpRightIn">
      <div className="section_jumpRightIn__element">
        <h2>{t("JUMP_RIGHT_IN_TITLE")}</h2>
        <p>{t("JUMP_RIGHT_IN_DESCRIPTION")}</p>
      </div>
      <div className="section_jumpRightIn__element bu">
        <ButtonPrimary
          text={t("CREATE_A_STORE")}
          href={DATA.jumpRightIn.href && DATA.jumpRightIn.href}
          targetBlank={true}
        />
      </div>
    </section>
  );
}
