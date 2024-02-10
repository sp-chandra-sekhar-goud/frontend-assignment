import axios from 'axios';

const API_KEY = 'live_58ZysUwJpEuQU51YGxMcU21ezbEFn0v3VpnNFchcjKu7hE60XQFpDVZmVt1qdE5w';

const CatModel = {
    async getRandomCat() {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                params: {
                    limit: 10, // Set the number of images to return
                    has_breeds: 1 // Filter only images that have breed information
                },
                headers: {
                    'x-api-key': API_KEY
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching cat data:', error);
            return null;
        }
    }
};

export default CatModel;
