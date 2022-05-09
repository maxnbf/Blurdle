import React from 'react';
import  xButton  from '../../../x.svg';
import { Bar, BarContainer, Close, Distribution, Header, Label, Modal, Stat, StatisticContainer, Statistics, Value } from './style';

const StatsModal = ({setModal}) => {

    const distr = JSON.parse(localStorage.getItem('distr'));
    const played = localStorage.getItem('played') !== null ? parseInt(localStorage.getItem('played')) : 0

    const distribution = {
        '1': distr ? distr['1'] || 0 : 0,
        '2': distr ? distr['2'] || 0 : 0,
        '3': distr ? distr['3'] || 0 : 0,
        '4': distr ? distr['4'] || 0 : 0,
        '5': distr ? distr['5'] || 0 : 0,
    }

    return <Modal>
                <Close src={xButton} onClick={() => setModal(false)}/>
                <Header>Statistics</Header>
                <Statistics>
                    <StatisticContainer>
                        <Value>
                            {played}
                        </Value>
                        <Stat>
                            Played
                        </Stat>
                       
                    </StatisticContainer>
                    <StatisticContainer>
                        <Value>
                            {localStorage.getItem('wins') || 0}
                        </Value>
                        <Stat>
                            Wins
                        </Stat>
                       
                    </StatisticContainer>
                    <StatisticContainer>
                        <Value>
                            {localStorage.getItem('currStreak') || 0}
                        </Value>
                        <Stat>
                            Current Streak
                        </Stat>
                        
                    </StatisticContainer>
                    <StatisticContainer>
                        <Value>
                            {localStorage.getItem('bestStreak') || 0}
                        </Value>
                        <Stat>
                            Best Streak
                        </Stat>
                        
                    </StatisticContainer>
                </Statistics>
                <Distribution>
                    <div>
                        <BarContainer><Bar height={100 * distribution['1']/played}>{distribution['1']}</Bar></BarContainer>
                        <Label>1</Label>
                    </div>
                    <div>
                        <BarContainer><Bar height={100 * distribution['2']/played}>{distribution['2']}</Bar></BarContainer>
                        <Label>2</Label>
                    </div>
                    <div>
                        <BarContainer><Bar height={100 * distribution['3']/played}>{distribution['3']}</Bar></BarContainer>
                        <Label>3</Label>
                    </div>
                    <div>
                        <BarContainer><Bar height={100 * distribution['4']/played}>{distribution['4']}</Bar></BarContainer>
                        <Label>4</Label>
                    </div>
                    <div>  
                        <BarContainer><Bar height={100 * distribution['5']/played}>{distribution['5']}</Bar></BarContainer>
                        <Label>5</Label>
                    </div>
                </Distribution>
            </Modal>
}

export default StatsModal