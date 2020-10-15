import React from "react";
import Link from "../../components/Link";
import Container from '../../components/Container';
import Center from '../../components/Center';

export default () => (
    <Center>
        <Container>
            <h1>SPA для просмотра списка пользователей</h1>
            <Link href="/users">Перейти к списку пользовтаелей</Link>
        </Container>
    </Center>
)

