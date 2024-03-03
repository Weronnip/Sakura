/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import styles from "./menu_style.module.css";

const queryClient = new QueryClient();
function MenuFood() {
  return (
    <>
      <div className={styles.wallpaper}>
        <div className={styles.FoodMenu}>
          <QueryClientProvider client={queryClient}>
            <GetAllFood />
          </QueryClientProvider>
        </div>
      </div>
    </>
  );
}

function GetAllFood() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["menu_food"],
    queryFn: () =>
      fetch("http://localhost:3000/api/menu_foods").then((res) => res.json()),
  });

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error)
    return <h4 className={styles.error__title}>An error has occurred</h4>;

  console.log(data);
  return data.map((data: any) => (
    <div className={styles.block__food} key={data.id_food}>
      <img
        src={data.image_food}
        alt="image_food"
        className={styles.image_food}
      />
      <h3 className={styles.title_food}>{data.name_food}</h3>
      <p className={styles.about_food}>
        <aside className={styles.about}>{data.about_food}</aside>
      </p>
      <button type="submit" className={styles.bth_price}>
        {data.price}₽
      </button>
    </div>
  ));
}

export { MenuFood };
