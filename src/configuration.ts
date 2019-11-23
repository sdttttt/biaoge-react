interface  ConfigurationEnv {
  baseUrl: string;
}

const PRODUCTION_ENV: ConfigurationEnv = {
  baseUrl: 'http://121.40.48.194:10086/'
};

const DEVELOPMENT_ENV = {
  baseUrl: 'http://121.40.48.194:10086/'
};

export default function getConfig() : ConfigurationEnv {
  return process.env.NODE_ENV == 'development' ? DEVELOPMENT_ENV : PRODUCTION_ENV;
}
