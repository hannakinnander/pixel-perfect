interface IProps {
  title: string;

  logo: string;
}

const Category = ({ title, logo }: IProps) => {
  return (
    <div>
      <img src={logo}></img>
      <p>{title}</p>
    </div>
  );
};

export default Category;
