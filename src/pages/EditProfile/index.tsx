import { Button } from "../../components/Button";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";

export const EditProfile = () => {
  console.log("oi");

  return (
    <section className={styles.container_user_edit_image_user}>
      <div className={styles.container_profile}>
        <UserProfile />
        <Button />
        <Button text="Voltar" isNavigation path="/profile" />
      </div>
      <section className={styles.container_user_edit}>
        <dl className={styles.user_details}>
          <div>
            <dt>Relacionamento:</dt>
            <dd>Solteiro</dd>
          </div>
          <div>
            <dt>Aniversário:</dt>
            <dd>21 de Julho</dd>
          </div>
          <div>
            <dt>Idade:</dt>
            <dd>22</dd>
          </div>
          <div>
            <dt>Interesses no Orkut:</dt>
            <dd>Solteiro</dd>
          </div>
          <div>
            <dt>Quem sou eu:</dt>
            <dd>Programador</dd>
          </div>
          <div>
            <dt>Filhos:</dt>
            <dd>Não</dd>
          </div>
          <div>
            <dt>Sexo:</dt>
            <dd>Masculino</dd>
          </div>
          <div>
            <dt>Fumo:</dt>
            <dd>Não</dd>
          </div>
          <div>
            <dt>Bebo:</dt>
            <dd>Depende do dia</dd>
          </div>
          <div>
            <dt>Moro:</dt>
            <dd>Guarantã</dd>
          </div>
          <div>
            <dt>País:</dt>
            <dd>Brasil</dd>
          </div>
          <div>
            <dt>Cidade natal:</dt>
            <dd>São Paulo</dd>
          </div>
          <div className={styles.multiple_options_field_details}>
            <dt>Músicas:</dt>
            <dd>Trap</dd>
            <dd>Rap</dd>
            <dd>Indie</dd>
          </div>
          <div className={styles.multiple_options_field_details}>
            <dt>Filmes:</dt>
            <dd>A rede social</dd>
            <dd>Meu amigo totoro</dd>
          </div>
        </dl>
      </section>
    </section>
  );
};
