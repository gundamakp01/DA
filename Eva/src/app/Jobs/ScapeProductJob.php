<?php

namespace App\Jobs;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Weidner\Goutte\GoutteFacade;

class ScapeProductJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $menuCollection;
    /**
     * Create a new job instance.
     */
    public function __construct(array $menuCollection)
    {
        $this->menuCollection = $menuCollection;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $category = Category::where('name', $this->menuCollection['name'])->first();
        $link = '';
        if (str_contains($this->menuCollection['link'], 'https://evadeeva.com.vn')) {
            $link = $this->menuCollection['link'];
        } else {
            $link = 'https://evadeeva.com.vn' . $this->menuCollection['link'];
        }
        $crawler = GoutteFacade::request('GET', $link);
        $product_links = $crawler->filter('.proloop-link')->each(function ($node) {
            return $node->attr("href");
        });
        foreach ($product_links as $product_link) {
            $crawler = GoutteFacade::request('GET', 'https://evadeeva.com.vn' . $product_link);
            $name = $crawler->filter('.product-name h1')->each(function ($node) {
                return $node->text();
            })[0];
            $code = $crawler->filter('#pro_sku strong')->each(function ($node) {
                return $node->text();
            })[0];
            $vendor = $crawler->filter('.pro-vendor strong a')->each(function ($node) {
                return $node->text();
            })[0];
            $price = $crawler->filter('.product-price')->each(function ($node) {
                if ($node->filter('del') === null) {
                    return preg_replace('/[^\d]+/', '', $node->filter('.del')->text());
                }
                return preg_replace('/[^\d]+/', '', $node->filter('.pro-price')->text());
            })[0];
            $discount = $crawler->filter('.product-price .pro-percent')->each(function ($node) {
                return preg_replace('/[^\d]+/', '', $node->text());
            })[0];
            $images = [];
            $urls = $crawler->filter('.product-thumb__photo')->each(function ($node) {
                return preg_replace('/_compact/', '_master', $node->attr('src'));
            });
            $image_names = $crawler->filter('.product-thumb__photo')->each(function ($node) {
                return $node->attr('alt');
            });
            $sizes = $crawler->filter('#variant-swatch-1 .select-swap .swatch-element')->each(function ($node) {
                return $node->attr('data-value');
            });
            $color = $crawler->filter('#variant-swatch-0 .select-swap .swatch-element')->each(function ($node) {
                return $node->attr('data-value');
            });
            $description = $crawler->filter('.desc-content-js')->each(function ($node) {
                return $node->html();
            });
            $count = count($urls);
            $data = [
                'name' => $name,
                'code' => $code,
                'vendor' => $vendor,
                'price' => $price,
                'discount' => $discount,
                'description' => $description[0] ?? null,
                'color' => $color,
                'category_id' => $category->id,
            ];
            foreach ($sizes as $size) {
                if ($size === "S") {
                    $data['size_s'] = rand(0, 50);
                }
                if ($size === "M") {
                    $data['size_m'] = rand(0, 50);
                }
                if ($size === "L") {
                    $data['size_l'] = rand(0, 50);
                }
                if ($size === "XL") {
                    $data['size_xl'] = rand(0, 50);
                }
            }
            $product = Product::create($data);
            for ($i = 0; $i < $count; $i++) {
                $images[] = [
                    'url' => $urls[$i],
                    'name' => $image_names[$i],
                ];
            }
            $product->images()->createMany($images);
        }
    }
}
