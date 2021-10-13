import React from 'react'
import { PageContainer } from '../../components/pageContainer/index'
import { TopSection } from './topSection'
import { Navbar } from '../../components/navbar/index'

export function HomePage(props) {
    return <PageContainer>
        <TopSection>
            <Navbar/>
            </TopSection>
    </PageContainer>
}


