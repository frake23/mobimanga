import React, {useEffect, useRef, useState} from 'react';
import {MainWrapper} from '../../components/MainWrapper';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View} from 'react-native';
import {IntroScreen} from './IntroScreen';
import { IntroNavigation } from './IntroNavigation';
import { useWrapperWidth } from './useWrapperWidth';
import spacings from '../../theme/spacings';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

export const introScreensData = [
	{
		id: 'welcome',
		imgSrc: require('../../assets/images/intro/welcome.png'),
		title: 'Добро пожаловать в приложение для чтения манги Mobi Manga',
		text: 'Чтение манги с комфортом теперь доступно каждому!',
	},
	{
		id: 'a_lot',
		imgSrc: require('../../assets/images/intro/a_lot.png'),
		title: 'Огромный выбор манги уже у тебя под рукой',
		text: 'У нас ты найдёшь более 100 000 тайтлов. Тебе точно найдётся что почитать.',
	},
	{
		id: 'comfortable',
		imgSrc: require('../../assets/images/intro/comfortable.png'),
		title: 'Читать мангу теперь по-настоящему удобно',
		text: 'Мы любим мангу и приложили все усилия, чтобы ты мог наслаждаться ей без помех.',
	},
	{
		id: 'regular',
		imgSrc: require('../../assets/images/intro/regular.png'),
		title: 'Не пропускай регулярные обновления списка манги',
		text: 'Самый быстрый выход твоих любимых навинок в MobiManga.',
	},
	{
		id: 'thanks',
		imgSrc: require('../../assets/images/intro/thanks.png'),
		title: 'Спасибо, что пользуешься нашим приложением!',
		text: 'Мы старательно развиваем наш сервис и стараемся сделать его ещё более удобным для тебя.',
	},
];

export const IntroController: React.FC = () => {
	const wrapperWidth = useWrapperWidth();
	const [selectedItem, setSelectedItem] = useState(0);

	const ref = useRef(null);
	const setNext = () => {
		if (selectedItem === introScreensData.length - 1)
			return;
		setSelectedItem(selectedItem + 1);
	}

	const setPrev = () => {
		if (selectedItem === 0)
			return;
		setSelectedItem(selectedItem - 1);
	}

	useEffect(() => {
		ref?.current?.scrollToIndex({
			index: selectedItem,
			animated: true
		})
	}, [selectedItem])


	return (
		<MainWrapper style={styles.wrapper}>
			<FlingGestureHandler
				direction={Directions.LEFT}
				onHandlerStateChange={e => {
					if (e.nativeEvent.state === State.END)
						setNext()
				}}
			>
				<FlingGestureHandler
					direction={Directions.RIGHT}
					onHandlerStateChange={e => {
						if (e.nativeEvent.state === State.END)
							setPrev()
					}}
				>
					<FlatList
						ref={ref}
						initialScrollIndex={selectedItem}
						data={introScreensData}
						keyExtractor={item => item.id}
						scrollEnabled={false}
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator={false}
						renderItem={({item}) => 
							<IntroScreen 
								imgSrc={item.imgSrc}
								title={item.title}
								text={item.text}
							/>
						}
					/>
				</FlingGestureHandler>
				
			</FlingGestureHandler>
			
			<IntroNavigation
				selected={selectedItem}
				viewsCount={introScreensData.length}
				onNext={setNext}
				onExit={() => null}
			/>
		</MainWrapper>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center'
	},
	navContainer: {
		marginBottom: spacings.sm * 2
	}
})
