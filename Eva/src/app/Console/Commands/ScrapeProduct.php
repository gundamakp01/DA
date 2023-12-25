<?php

namespace App\Console\Commands;

use App\Jobs\ScapeProductJob;
use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Console\Command;
use Weidner\Goutte\GoutteFacade;
use Illuminate\Support\Str;

class ScrapeProduct extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrape-product {url}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $subCategory = [
            'Homewear',
            'Jumpsuit',
            'Sản Phẩm Unique',
        ];
        $crawler = GoutteFacade::request('GET', $this->arguments('url')['url']);
        $categories = Category::whereNull('parent_id')->get();
        $categoryName = $crawler->filter('.head-title .title')->each(function ($node) {
            return $node->text();
        })[0];
        $menuCollections = [];
        if (in_array($categoryName, $subCategory)) {
            $menuCollections[] = [
                'name' => $categoryName == 'Sản Phẩm Unique' ? 'Unique Collection' : $categoryName,
                'link' => $this->arguments('url')['url']
            ];
        } else {
            $menuCollections = $crawler->filter('ul.menuCollection li')->each(function ($node) {
                return [
                    'name' => $node->text(),
                    'link' => $node->filter('a')->attr("href")
                ];
            });
            $removeKeyContainString = "Tất cả";
            $menuCollections = array_filter($menuCollections, function ($menuCollection) use ($removeKeyContainString) {
                return !Str::contains($menuCollection['name'], $removeKeyContainString);
            });
        }
        foreach ($menuCollections as $menuCollection) {
            dispatch(new ScapeProductJob($menuCollection));
        }
    }
}
