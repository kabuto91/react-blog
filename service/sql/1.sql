/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.7.29-log : Database - react-blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`react-blog` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `react-blog`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT '0',
  `view_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `article` */

insert  into `article`(`id`,`type_id`,`title`,`article_content`,`introduce`,`addTime`,`view_count`) values 
(1,1,'2021前端开发学习路径 一张图让你轻松自学','想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。','想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。',151315152,0),
(2,1,'程序员在职成长指南 用对这6个方法技术快速提升','你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。','你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。',121321213,1);

/*Table structure for table `type` */

DROP TABLE IF EXISTS `type`;

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `typeName` varchar(255) NOT NULL,
  `orderNum` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `type` */

insert  into `type`(`id`,`typeName`,`orderNum`,`icon`) values 
(1,'视频教程',1,'home'),
(2,'大胖逼逼叨',2,'youtube'),
(3,'快乐星球',3,'smile');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
