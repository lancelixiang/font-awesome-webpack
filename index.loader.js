module.exports = function() {
};
module.exports.pitch = function(remainingRequest) {
    this.cacheable(true);
    var config = require(this.resourcePath);
  	var postStyleLoaders = '';
  	if((typeof config.postStyleLoaders !== 'undefined') && (config.postStyleLoaders.length > 0)){
    	postStyleLoaders = config.postStyleLoaders.join('!') + '!';
  	}
    return [
        'require(' + JSON.stringify("-!" + postStyleLoaders + require.resolve("style-loader") + '!' + require.resolve("css-loader") +
                '!' + require.resolve("less-loader") + '!' + require.resolve("./font-awesome-styles.loader.js") + '!' + remainingRequest) + ');'
    ].join("\n");
};
