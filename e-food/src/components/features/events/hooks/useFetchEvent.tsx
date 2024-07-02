import { useContext, useEffect, } from "react";
import { EventPost, FullCalendarProps, } from "../types/interfaces";
import getRestaurantEvents from "../api/getEvent";
import { EventContext } from "../context/EventContext";
import { datesDiff } from "../../../utils/diff_dates";


export function useFetchEvent() {


    const { events, updateEvents, loading, setLoading,visible } = useContext(EventContext);


    useEffect(() => {
        // fetch data

        let events: FullCalendarProps[] = [];

        

        async function fetchData() {
            try {

                setLoading(true);

                //TODOS: remplace id restaurant
                /**
                 * @param {number} id
                 */
                const allEvents = await getRestaurantEvents(1);


                allEvents.map((event: (EventPost)) => {

                    const dateDebut: Date = new Date(event.date_debut);

                    const dateFin: Date = new Date(event.date_fin);


                    const yearD = dateDebut.getFullYear();
                    const monthD = String(dateDebut.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const dayD = String(dateDebut.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const hoursD = String(dateDebut.getHours()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const minutesD = String(dateDebut.getMinutes()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const secondsD = String(dateDebut.getSeconds()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire

                    // // Créer une chaîne de caractères au format 'YYYY-MM-DD'
                    const formattedDateD = `${yearD}-${monthD}-${dayD}T${hoursD}:${minutesD}:${secondsD}Z`;


                    const yearF = dateFin.getFullYear();
                    const monthF = String(dateFin.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const dayF = String(dateFin.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const hoursF = String(dateFin.getHours()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const minutesF = String(dateFin.getMinutes()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const secondsF = String(dateFin.getSeconds()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire


                    // // Créer une chaîne de caractères au format 'YYYY-MM-DD'
                    const formattedDateF = `${yearF}-${monthF}-${dayF}T${hoursF}:${minutesF}:${secondsF}Z`;

                    // Fullcalender objet


                    let current = new Date();

                    

                    
                    

                    if (current > dateFin) {

                        const eventFull: FullCalendarProps = {
                            id: event.code.toString(),
                            title: event.titre,
                            start: formattedDateD,
                            end: formattedDateF,
                            description: event.description,
                            display: "auto",
                            color: "red",
                            textColor: "black !important",
                            status: event.status,
                            progress:{cusumme:1,total:3}

                        }

                        events.push(eventFull);

                    } else {

                        let nombreEffectue:number =  datesDiff(current,dateFin);
                        let total:number =  datesDiff(dateDebut,dateFin);


                        const eventFull: FullCalendarProps = {
                            id: event.code.toString(),
                            title: event.titre,
                            start: formattedDateD,
                            end: formattedDateF,
                            description: event.description,
                            display: "auto",
                            color: "#f19828",
                            textColor: "black !important",
                            status: event.status,
                            progress:{cusumme:total,total:nombreEffectue}

                        }

                       
                        
                        

                        events.push(eventFull);

                    }



                })

                updateEvents(events);

                setLoading(false)
                //FixMe: Add state error
            } catch (error) {
                console.error('Error fetching events:', error);
            }

        }

        fetchData()


    }, [visible==false])

    return {
        loading,
        events,

    }


}