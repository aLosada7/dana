import { Story, Meta } from '@storybook/react';
import { asChromaticStory } from '../../../lib/story-intents';
import { Card, CardActions, CardBody, CardImage, CardProps } from '.';
import { Badge, Container, Row, Col, Text, Button, Divider } from '../..';
import {
    SvgArrowRight,
    SvgBell,
    SvgGraduation,
    SvgValidated,
} from '../../../foundations/icons';
import { cardDescription, cardStatus, h3 } from './storiesStyles';

export default {
    component: Card,
    title: 'Components/Data Display/Card',
} as Meta;

export const ImageAndBody: Story<CardProps> = () => (
    <Row>
        <Col sm={24} md={12} lg={8} xl={6}>
            <Card>
                <CardImage
                    src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
                    alt="Image Example"
                ></CardImage>
                <CardBody>
                    <Text size="lg">Basics of Angular</Text>
                    <Text mt={4}>
                        Introductory course for Angular and framework basics
                    </Text>
                </CardBody>
            </Card>
        </Col>
    </Row>
);
asChromaticStory(ImageAndBody);

export const BodyAndActions: Story<CardProps> = (args) => (
    <Row>
        <Col lg={6} sm={24}>
            <Card>
                <CardBody>
                    <Row align="space-between-center">
                        <Badge
                            text="Web"
                            variant="success"
                            cssOverrides={cardStatus}
                        ></Badge>
                        <SvgValidated size="xsmall" color="rgb(22, 163, 74)" />
                    </Row>

                    <Text mt={16} size="lg">
                        Basics of Angular
                    </Text>
                    <Text mt={2} cssOverrides={cardDescription}>
                        Introductory course for Angular and framework basics
                    </Text>

                    <Divider width={12} />

                    <Row direction="column">
                        <Text icon={<SvgBell size="small" />}>
                            <span>30 minutes</span>
                        </Text>
                        <Text icon={<SvgGraduation size="small" />}>
                            <span>Completed twice</span>
                        </Text>
                    </Row>
                </CardBody>
                <CardActions>
                    <Divider />
                    <Row align="end-center" px={6} py={4}>
                        <Button variant="outline" rightIcon={<SvgArrowRight />}>
                            Continue
                        </Button>
                    </Row>
                </CardActions>
            </Card>
        </Col>
    </Row>
);
asChromaticStory(BodyAndActions);
