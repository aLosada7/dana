import { css } from '@emotion/react';

import { Card, CardBody, Container, Text } from '@dana-components';

import { DateBadgeComponent } from '../components/DateBadgeComponent';
import { TimelineComponent } from '../components/TimelineComponent';
import { MaterialIcon, textSans, Theme, useThemeContext } from '@dana';

const list = css`
    list-style: none;
`;

const listItem = css`
    position: relative;
    padding: 1.75rem 0;
`;

const timelineItem = css`
    display: flex;
`;

const icon = css`
    width: 40px;
    min-width: 40px;
    height: 40px;

    border-radius: 50%;
    margin-right: 1rem;
    z-index: 1;

    background-color: rgb(148, 163, 184);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const dateInfo = (theme: Theme) => css`
    ${textSans.small({ fontWeight: 'regular' })};
    color: ${theme.grays[3]};
`;

const note = (theme: Theme) => css`
    margin-top: 1rem;
    background-color: ${theme.grays[6]};
    box-shadow: none;
`;

const noteTitle = css`
    ${textSans.medium({ fontWeight: 'bold' })};
`;

export const FlightStatusContainer = () => {
    const { theme } = useThemeContext();
    return (
        <Container>
            <ol css={list}>
                <li css={listItem}>
                    <DateBadgeComponent date="Today" />
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>flight_land</MaterialIcon>
                        </div>
                        <div>
                            <Text>The flight has landed at 3:50 PM</Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 05, 3:52 PM
                            </Text>
                            <Card cssOverrides={note(theme)}>
                                <CardBody>
                                    <Text cssOverrides={noteTitle}>
                                        Thank you for traveling with DANA
                                        Flights.
                                    </Text>
                                    <br />
                                    <Text>
                                        Thank you for choosing us as your
                                        trusted airline. We hope you have
                                        enjoyed travelling with{' '}
                                        <b>DANA Flights</b>.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>flight_takeoff</MaterialIcon>
                        </div>
                        <div>
                            <Text>The flight has taken off at 1:50 PM</Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 05, 1:52 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>flight</MaterialIcon>
                        </div>
                        <div>
                            <Text>
                                Last call for the passangers of flight DN-7243
                            </Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 05, 1:41 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>airplane_ticket</MaterialIcon>
                        </div>
                        <div>
                            <Text>
                                Boarding is now allowed for all passangers
                            </Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 05, 11: 59 AM
                            </Text>
                        </div>
                    </div>
                </li>

                <li css={listItem}>
                    <DateBadgeComponent date="Yesterday" />
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>luggage</MaterialIcon>
                        </div>
                        <div>
                            <Text>Early check-in is opened for everyone</Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 04, 1:50 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>flight_class</MaterialIcon>
                        </div>
                        <div>
                            <Text>
                                Early check in is opened for Premium passengers
                            </Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jul 04, 1:50 AM
                            </Text>
                        </div>
                    </div>
                </li>

                <li css={listItem}>
                    <DateBadgeComponent date="15 days ago" />
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <MaterialIcon>schedule</MaterialIcon>
                        </div>
                        <div>
                            <Text>
                                The flight time has been reescheduled to Jul 05,
                                1:50
                            </Text>
                            <Text cssOverrides={dateInfo(theme)}>
                                Jun 20, 8:24 AM
                            </Text>
                        </div>
                    </div>
                </li>
            </ol>
        </Container>
    );
};
