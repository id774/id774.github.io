# id774.net Website

## Overview

This repository contains the source code of the [id774.net](https://id774.net) website.
The site is designed to be extremely simple, text-oriented, and based on Bootstrap 5.

It consists of a Japanese and an English index page, along with an external links page.
Deployment is typically managed under `/var/www/html/id774net` with a `current` symbolic link for switching versions.

## Deployment

To deploy the site on your server:

```sh
git clone https://github.com/id774/id774net.git
cd id774net
# Copy or symlink to /var/www/html/id774net and point /var/www/html/current to it
```

Example with symlink switching:

```sh
sudo ln -sfn /var/www/html/id774net /var/www/html/current
```

This allows atomic switching between versions by updating the `current` symlink.

## License

All public web content that I publish is licensed under the following conditions, unless otherwise noted:

- **Code**: dual licensed under [GPL version 3](https://www.gnu.org/licenses/gpl-3.0.html) or [LGPL version 3](https://www.gnu.org/licenses/lgpl-3.0.html)
- **Documentation, photos, and images**: licensed under [CC BY-ND 4.0 International](https://creativecommons.org/licenses/by-nd/4.0/)

For full details, please refer to the license texts:

- [LICENSE](doc/LICENSE)
- [COPYING](doc/COPYING)
- [COPYING.LESSER](doc/COPYING.LESSER)
- [CC-BY-ND-4.0.txt](doc/CC-BY-ND-4.0.txt) (offline copy of the license text)
