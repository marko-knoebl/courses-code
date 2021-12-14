# How to release this project
## Versioning Policy
* https://semver.org

## What to do

* Use one release issue for all projects https://gitlab.com/oersi/oersi-setup/-/issues/new
 
* Set release version in __package.json__, __package-lock.json__
```
npm --no-git-tag-version version <RELEASE-VERSION>
git add package.json package-lock.json
git commit -m "next Release <RELEASE-VERSION> (Ref <ISSUE-ID>)"
```
* Create release tag
```
git tag -a <RELEASE-VERSION> -m "release <RELEASE-VERSION> (Ref <ISSUE-ID>)"
```
* Set next version x.y+1.0-SNAPSHOT in __package.json__ and __package-lock.json__
``` 
npm --no-git-tag-version version <NEXT-SNAPSHOT-VERSION>
git add package.json package-lock.json
git commit -m "next snapshot (Ref <ISSUE-ID>)"
```
* Push
```
git push origin master
git push origin <RELEASE-VERSION>
```
