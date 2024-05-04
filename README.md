# @drakexorn/expo-torchstate

A library to access the devices' flashlight.

## Installation

In order to install this package, you need to have a project created with [Expo](https://expo.dev/).
For bare React Native projects, you must ensure that you
have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before
continuing.

Once you have your project ready, you can install the package using the following command:

```bash
npm install @drakexorn/expo-torchstate
```

## Usage

To be able to use the library, you need to import it in your file:

```javascript
import {useTorch} from '@drakexorn/expo-torchstate';
```

Then, you can use the `useTorch` hook to access the flashlight. For example :

```javascript
export default function SeeTorchState() {
  const [torchOn, setTorchStatus] = useTorch();

  return (
    <View style={styles.container}>
      <Text>Flashlight turned {torchOn ? "on" : "off"}</Text>
      <Pressable style={styles.button} onPress={() => setTorchStatus(currentState => !currentState)}>
        <Text>Toggle flashlight</Text>
      </Pressable>
    </View>
  );
}
```

The hook provides a boolean value representing the current state of the flashlight and a function to toggle it.

## Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](./CONTRIBUTING.md).

## Authors

Thanks to the following people who have contributed to this project:

- Christophe Bernard - **Initial work** - [@drakexorn](https://github.com/DrakeXorn)
- Tinaël Devresse - **Suggestions** - [@hunteroi](https://github.com/hunteroi)

## Acknowledgements

This project has been built using `create-expo-module`, thanks to the Expo team for providing this tool.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
