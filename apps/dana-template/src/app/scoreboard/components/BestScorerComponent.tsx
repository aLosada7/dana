import { css } from '@emotion/react';

import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
    Text,
} from '@dana-components';

export const BestScorerComponent = () => (
    <Card
        cssOverrides={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>SCORING</CardHeader>
        <CardBody>
            <Row py={1}>
                <Col lg={8} direction="column" align="center">
                    <Avatar shape="circle" />
                </Col>
                <Col lg={16} direction="column">
                    <Row direction="column" px={2}>
                        <Text weight="bold">Danial Berry</Text>
                        <Text size="xsm" weight="bold">
                            Jason Chapman, Jake Sullivan
                        </Text>
                        <Text size="xsm" weight="bold">
                            11:20 / 1st
                        </Text>
                    </Row>
                </Col>
            </Row>
        </CardBody>
    </Card>
);
