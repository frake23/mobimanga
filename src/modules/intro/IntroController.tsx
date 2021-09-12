import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {IntroScreen} from './IntroScreen';
import { IntroNavigation } from './IntroNavigation';
import spacings from '../../constants/spacings';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import introScreensData from '../../constants/introScreenData';

interface IntroControllerProps {
	onExit: () => void
}

export const IntroController: React.FC<IntroControllerProps> = ({onExit}) => {
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
		// @ts-ignore
		ref?.current?.scrollToIndex({
			index: selectedItem,
			animated: true
		})
	}, [selectedItem])


	return (
		<SafeAreaView style={styles.wrapper}>
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
				onExit={onExit}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		flex: 1,
        paddingHorizontal: spacings.xs,
	},
	navContainer: {
		marginBottom: spacings.sm * 2
	}
})
