import * as React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import Text from '../base/text';
import View from '../base/view';

interface IHappeningListItemProps {
    happening: any;
}

export default class HappeningListItem extends React.Component<IHappeningListItemProps> {
    public render() {
        const { name, place } = this.props.happening;

        return (
            <TouchableOpacity>
                <View direction='vertical'>
                    <Text>{name}</Text>
                    <Text>{place}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}