import { Calendar } from "#components/Calendar";
import { Card } from "#components/Card";
import { Heading } from "#components/Heading";
import { User } from "#types/types";
import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import axios from "#services/axios";
import { RefetchContext } from "#contexts/refetchContext";
import { Loading } from "#pages/Loading";

export function Home() {
  const [dailies, setDailies] = useState([]);
  const [updated, setUpdated] = useState(true);
  const [todayPresenter, setTodayPresenter] = useState<User | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);

  const updateObject = {
    updated,
    setUpdated,
  };

  useEffect(() => {
    axios
      .get("/daily")
      .then((res) => {
        if (res.data.length > 0) {
          const usersWithoutFirst = res.data.slice(1);
          setDailies(usersWithoutFirst);
          setTodayPresenter(res.data[0]);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updated]);

  return (
    <RefetchContext.Provider value={updateObject}>
      {!isLoading ? (
        <Wrapper>
          <Heading>Daily Calendar</Heading>
          {todayPresenter && (
            <Card
              sex={todayPresenter.sex}
              name={todayPresenter.name}
              _id={todayPresenter._id}
            />
          )}
          <Calendar users={dailies} />
        </Wrapper>
      ) : (
        <Loading />
      )}
    </RefetchContext.Provider>
  );
}
