module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: {
						'@components/screens': './src/components/screens',
						'@components/shared': './src/components/shared',
						'@models': './src/models',
						'@services': './src/services',
						'@globalStyles': './src/globalStyles',
					},
				},
			],
		],
	};
};
