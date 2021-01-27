import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            activities: [
                {
                    id: "a1",
                    title: "Soirée @ Catacombes",
                    image: "https://www.tripsavvy.com/thmb/eVMHqNwPioPFRNSNczZThW438R4=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ParisCatacombs-9b0f678ccab940c28916e64afa309bfb.jpg",
                    description: "Let's do this"
                },
                {
                    id: "a2",
                    title: "Apéro @ Quai de Valmy",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/P1040723_Paris_X_canal_Saint-Martin_quai_de_Valmy_rwk.jpg/1600px-P1040723_Paris_X_canal_Saint-Martin_quai_de_Valmy_rwk.jpg",
                    description: "Let's do this"
                },
                {
                    id: "a3",
                    title: "Vin chaud @ Place de la Contrescarpe",
                    image: "https://www.goodmorningparis.fr/wp-content/uploads/2015/03/Place-de-la-Contrescarpe-by-night-Paris.jpg",
                    description: "Let's do this"
                }
            ]
        };
    },
    getters: {
        activities(state) {
            return state.activities;
        },
        activity(state) {
            return (activityId) => {
                return state.activities.find((activity) => activity.id === activityId);
            };
        }
    }
});

export default store;

