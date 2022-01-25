import { Label } from "components/MoviesLabel";
import { useEffect, useState } from "react";
import { historyController } from "backend/controllers/laravel-api/historyController";
import { HistoryContent } from "backend/types/ApiExternalResponse";
import { Skeleton, styled } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';

const time = require('@mailtop/horizontal-timeline');
const { TimelineEvent } = time;


const TimelineEventStyled = styled(TimelineEvent)`
  width: 100px !important;
  margin-bottom: 45px !important;
`;

export const LocalHistory = () => {

  const envolviment = {
    isNormalLabel: false,
    SectionTitle: "Histórico",
    SectionSubTitle: "",
    NoButton: true
  };

  const [steps, setSteps] = useState<HistoryContent>(
    {
      lenght: 0,
      history: []
    }
  );

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  useEffect(() => {
    const controller = new historyController();

    controller.getAll(userToken).then((response) => {
      setSteps(response.data);
    })
  }, []);

  const iconsTsimeLine = [,
    VisibilityIcon,
    FavoriteIcon,
    HeartBrokenIcon,
    AlarmOnIcon,
    AlarmOffIcon
  ];

  const ColorTimeline = {
    add: "green",
    remove: "#9c2919",
    neutral: "#87a2c7"
  }

  const relationshipIconsColor = [,
    ColorTimeline.neutral,
    ColorTimeline.add,
    ColorTimeline.remove,
    ColorTimeline.add,
    ColorTimeline.remove
  ];

  return (
    <>
      {/* Section */}
      <section className="bg-white dark:bg-gray-800 px-2">
        <div className="w-full py-6 space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
          {/* Label */}
          <Label envolviment={envolviment} />

          <div className="flex flex-row overflow-x-scroll w-full">
            {steps?.history.length > 4 ? (
              steps.history.map((h) => {
                return (
                  <TimelineEventStyled
                    key={String(Math.floor(Math.random() * 1000))}
                    height="small"
                    color={relationshipIconsColor[h.type_id]}
                    icon={iconsTsimeLine[h.type_id]}
                    title={
                      <>
                        <p className="font-bold text-xl my-4 dark:text-white">{h.type}</p>
                        <p className="dark:text-gray-100 my-2">{h.ad_content}</p>
                      </>}
                    subtitle={
                      <>
                        <p className="dark:text-gray-100">{h.created_at}</p>
                      </>}
                  />
                )
              })
            ) : (
              <>
                <div className="flex flex-row justify-between">
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                </div>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
}