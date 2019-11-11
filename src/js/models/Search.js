import axios from "axios";
import { key, proxy } from '../config';


export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      //${proxy}
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      //const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

      this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
