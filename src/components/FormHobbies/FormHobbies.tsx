export const FormHobbies = () => {
  return (
    <form>
      <label>
        Quem sou eu
        <textarea
          name=""
          id=""
          placeholder="Fale um pouco sobre você"
        ></textarea>
      </label>
      <label>
        Interesses
        <input
          type="text"
          placeholder="Fale sobre seus hobbies e as coisa que você gosta"
        />
      </label>
      <label>
        Relacionamento
        <select name="" id="">
          <option>Solteiro</option>
          <option>Casado</option>
          <option>Viúvo</option>
        </select>
      </label>
      <label>
        Tem filhos?
        <select name="" id="">
          <option value=""> Sim</option>
          <option value=""> Não</option>
        </select>
      </label>
      <label>
        Filmes Favoritos
        <textarea placeholder="O fantástisco mundo de bob "></textarea>
      </label>
      <label>
        Músicas Favoritas
        <textarea name="" id=""></textarea>
      </label>
      <input type="submit"></input>
    </form>
  );
};
