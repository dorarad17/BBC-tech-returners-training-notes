/*

.gitignore

.gitignore is telling git which files and folders you want it to NOT track. So don't add it and commit it. I want git to ignore it. 

Any file we add here is greyed out in the VSC explorer, which shows that git is not interested in it. It will also be the case that if we put git status into our terminal, it will show that the .gitignore has been updated, but it won't show config.dev.json, as that is ignored by git. 


# package directories
node_modules
jspm_packages

# Serverless directories  
.serverless

# Ignore config
config.*.json


The * here means all or any. So at the moment we have a config.dev.json but in future this might change to config.prod.json or something else and we would want that ignored too. So by putting the * in, it future proofs it against us changing the filename and forgetting to update the .gitignore file

