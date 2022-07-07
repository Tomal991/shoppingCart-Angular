export class Product {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category!: Category['title'];
  image: string = '';
  subCategory1!: SubCategory1['title'];
  subCategory2!: SubCategory2['title'];
}
export class Category {
  id: number = 0;
  title: string = '';
}
export class SubCategory1 {
  id: number = 0;
  title: string = '';
  categoryId: number = 0;
}
export class SubCategory2 {
  id: number = 0;
  title: string = '';
  subCategory1Id: number = 0;
  categoryId: number = 0;
}
// export class SubCategory1 {

//   parentId: Category['id'] = 0;
//   title: string = '';
// }

// export class SubCategory2 {
//   id: number = 0;
//   parentId: SubCategory1['id'] = 0;
//   title: string = '';
// }
