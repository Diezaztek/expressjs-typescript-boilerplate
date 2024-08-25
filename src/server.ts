import appConfig  from './configs/app.config';
import app from './app';

app.listen(appConfig.port, () => {
    console.log(`Server running on port ${appConfig.port}`);
});
