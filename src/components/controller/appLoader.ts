import Loader from './loader';
class AppLoader extends Loader {
  constructor() {
        super('https://newsapi.org/v2/', {
      apiKey: '760addf29b6840f587bfba2f01b7c78d' // получите свой ключ https://newsapi.org/
        })
  }
}
export default AppLoader;
