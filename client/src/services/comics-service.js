export default class ComicsService {

    async getComicBook(url) {
        const res = await fetch(url);

        return await res.json()
    }
}