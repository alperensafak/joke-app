import React, {useState} from 'react';
import axios from "axios"
import {Button, Form, Header, Image, Row, Search, Wrapper} from "./components/styled/index"
import Lottie from 'react-lottie';
import animationData from './lotties/laugh.json';
import JokeItem from "./components/JokeItem";
import {Joke,Flag,Category} from "./common/types";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

const App = () => {

    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const [jokes, setJokes] = useState<Joke[]>([])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`
        const {data}:any = await axios.get(ENDPOINT);
        if (data.error) {
            setError(true);
            setJokes([]);
        } else {
            setError(false);
            setJokes(data.jokes);
        }

        setSearch("");


    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Wrapper>
                <Row>
                    <Header>JOKE APP</Header>
                    <Image> <Lottie options={defaultOptions}/></Image>
                </Row>

                <Form onSubmit={getJokes}>
                    <Search
                        type="text"
                        placeholder="Search.."
                        value={search}
                        onChange={handleChange}
                    /> <Button type="submit">Submit</Button>

                </Form>

                {/* Jokes */}
                <div>
                    {error && <p>Sorry, no jokes found.</p>}

                    {jokes.length > 0 &&

                    jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
                </div>

            </Wrapper>
        </div>
    );
};

export default App;