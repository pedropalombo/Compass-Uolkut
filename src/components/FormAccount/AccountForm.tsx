const FormAccount = () => {
  return (
    <form>
      <label>
        Digite seu nome completo
        <input type="text" placeholder="" />
      </label>
      <label>
        Digite seu e-mail
        <input type="email" />
      </label>
      <label>
        Selecione sua data de nascimento
        <input type="date" />
      </label>
      <label>
        Digite sua cidade e estado
        <input type="text" placeholder="Ex: Recife-PE" />
      </label>
      <label>
        Digite sua senha
        <input
          type="password"
          placeholder="Mínimo de 8 caracteres"
          minLength={8}
        />
      </label>
      <label>
        Confirme sua senha
        <input type="password" />
      </label>
      <label htmlFor=""></label>
    </form>
  );
};

export default FormAccount;
