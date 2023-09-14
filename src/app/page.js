
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Featured from "@/components/featured/Featured";

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}>
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </main>
  );
}
