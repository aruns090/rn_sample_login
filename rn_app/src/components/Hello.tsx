import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IProps {
  name: string;
}

interface IState {
  loading: boolean;
}

export class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactNode {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          {'Hello ' + `${this.props.name}` + '!!!!'}
        </Text>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 22,
  },
})
