import { Calendar } from "#components/Calendar";
import { Card } from "#components/Card";
import { Heading } from "#components/Heading";
import { User } from "#types/types";
import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import axios from "#services/axios";
import { RefetchContext } from "#contexts/refetchContext";
import { Loading } from "#pages/Loading";
import { Button } from "#components/Button";
import { mock } from "#constants/mockData";

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
          console.log(res.data[0]);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        alert("Failed to get");
      });
  }, [updated]);

  const handleClear = () => {
    const token = localStorage.getItem("token");

    axios
      .patch("/daily", mock, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUpdated(!updated);
      })
      .catch(() => {
        alert("Failed update daily");
      });
  };

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
          <Button onClick={handleClear}>Сброс</Button>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </RefetchContext.Provider>
  );
}
