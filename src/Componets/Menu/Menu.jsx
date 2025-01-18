import apple from "../../assets/Fruits/apple.png";
import orange from "../../assets/Fruits/orange.png";
import avocado from "../../assets/Fruits/avocado.png";
import cherry from "../../assets/Fruits/cherry.png";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    Price: "$3.99",
    itemImage: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    Price: "$4.99",
    itemImage: orange,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    Price: "$5.99",
    itemImage: avocado,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    Price: "$2.99",
    itemImage: cherry,
    delay: 1.2,
  },
];
const Menu = () => {
  return (
    <>
      <section>
        <span id="menu"></span>
        <div className="container mb-20">
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-2xl font-bold text-left pb-10 uppercase"
          >
            Our Menu
          </h1>
          <div 
          data-aos="fade-left"
                data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {MenusData.map((data) => (
              <div
                
                key={data.id}
                className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 hover:scale-110 duration-200"
              >
                <img
                  src={data.itemImage}
                  alt=""
                  className="w-[60px] mb-4 scale-110 transform-translate-y-6"
                />
                <div>
                  <h1 className="text-lg font-semibold">{data.title}</h1>
                  <p className="text-lg font-semibold">{data.Price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
