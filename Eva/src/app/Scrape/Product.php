<?php

namespace App\Scraper;

use Goutte\Client;
use Symfony\Component\BrowserKit\HttpBrowser;
use Symfony\Component\DomCrawler\Crawler;

class Product extends HttpBrowser
{
    public $url;
    public function __construct($url) {
        $this->url = $url;
    }
    public function scrape()
    {
        $client = new Client();
        $crawler = $client->request('GET', $this->url);
    }
}